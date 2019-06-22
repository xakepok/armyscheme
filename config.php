<?php

/**
 * Class Config
 *  Конфигурация проекта
 */
class Config
{
    /**
     * Config constructor.
     * @param bool $cache включено ли кеширование
     */
    public function __construct($cache = true)
    {
        $this->cache = (bool) $cache;
    }

    /**
     * Возвращает версию файла с учётом кеша
     * @return string
     */
    public function version(): string
    {
        return (!$this->cache) ? mt_rand(0,99999) : '';
    }

    public function getCache(): bool
    {
        return $this->cache;
    }

    private $cache;
}