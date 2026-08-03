# `icebergTableFromRest` Submodule <a name="`icebergTableFromRest` Submodule" id="@cdktn/provider-snowflake.icebergTableFromRest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IcebergTableFromRest <a name="IcebergTableFromRest" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest snowflake_iceberg_table_from_rest}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRest;

IcebergTableFromRest.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogTableName(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .autoRefresh(java.lang.String)
//  .catalog(java.lang.String)
//  .catalogNamespace(java.lang.String)
//  .comment(java.lang.String)
//  .enableIcebergMergeOnRead(java.lang.Boolean|IResolvable)
//  .externalVolume(java.lang.String)
//  .icebergMergeOnReadBehavior(java.lang.String)
//  .id(java.lang.String)
//  .pathLayout(java.lang.String)
//  .replaceInvalidCharacters(java.lang.Boolean|IResolvable)
//  .storageSerializationPolicy(java.lang.String)
//  .targetFileSize(java.lang.String)
//  .timeouts(IcebergTableFromRestTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.catalogTableName">catalogTableName</a></code> | <code>java.lang.String</code> | Specifies the name of the table as it appears in the external catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.autoRefresh">autoRefresh</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the external catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.catalog">catalog</a></code> | <code>java.lang.String</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.catalogNamespace">catalogNamespace</a></code> | <code>java.lang.String</code> | Specifies the namespace (or database) in the external catalog that the table belongs to. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.enableIcebergMergeOnRead">enableIcebergMergeOnRead</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read). |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.icebergMergeOnReadBehavior">icebergMergeOnReadBehavior</a></code> | <code>java.lang.String</code> | Specifies the merge-on-read behavior for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#id IcebergTableFromRest#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.pathLayout">pathLayout</a></code> | <code>java.lang.String</code> | Specifies the storage layout for the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>java.lang.String</code> | Specifies the storage serialization policy for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.targetFileSize">targetFileSize</a></code> | <code>java.lang.String</code> | Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogTableName`<sup>Required</sup> <a name="catalogTableName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.catalogTableName"></a>

- *Type:* java.lang.String

Specifies the name of the table as it appears in the external catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#catalog_table_name IcebergTableFromRest#catalog_table_name}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#database IcebergTableFromRest#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#name IcebergTableFromRest#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#schema IcebergTableFromRest#schema}

---

##### `autoRefresh`<sup>Optional</sup> <a name="autoRefresh" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.autoRefresh"></a>

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the external catalog.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#auto_refresh IcebergTableFromRest#auto_refresh}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.catalog"></a>

- *Type:* java.lang.String

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#catalog IcebergTableFromRest#catalog}

---

##### `catalogNamespace`<sup>Optional</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.catalogNamespace"></a>

- *Type:* java.lang.String

Specifies the namespace (or database) in the external catalog that the table belongs to.

If not specified, the catalog integration's default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#catalog_namespace IcebergTableFromRest#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#comment IcebergTableFromRest#comment}

---

##### `enableIcebergMergeOnRead`<sup>Optional</sup> <a name="enableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.enableIcebergMergeOnRead"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#enable_iceberg_merge_on_read IcebergTableFromRest#enable_iceberg_merge_on_read}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.externalVolume"></a>

- *Type:* java.lang.String

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#external_volume IcebergTableFromRest#external_volume}

---

##### `icebergMergeOnReadBehavior`<sup>Optional</sup> <a name="icebergMergeOnReadBehavior" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.icebergMergeOnReadBehavior"></a>

- *Type:* java.lang.String

Specifies the merge-on-read behavior for the Iceberg table.

Valid values are: [AUTO ENABLED DISABLED]. Cannot be changed after creation. For more information, check [ICEBERG_MERGE_ON_READ_BEHAVIOR docs](https://docs.snowflake.com/en/sql-reference/parameters#iceberg-merge-on-read-behavior).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#iceberg_merge_on_read_behavior IcebergTableFromRest#iceberg_merge_on_read_behavior}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#id IcebergTableFromRest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pathLayout`<sup>Optional</sup> <a name="pathLayout" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.pathLayout"></a>

- *Type:* java.lang.String

Specifies the storage layout for the Iceberg table's Parquet files.

Valid values are: [FLAT HIERARCHICAL]. Cannot be changed after creation. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#path_layout IcebergTableFromRest#path_layout}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#replace_invalid_characters IcebergTableFromRest#replace_invalid_characters}

---

##### `storageSerializationPolicy`<sup>Optional</sup> <a name="storageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.storageSerializationPolicy"></a>

- *Type:* java.lang.String

Specifies the storage serialization policy for the Iceberg table.

Valid values are: [COMPATIBLE OPTIMIZED]. Cannot be changed after creation. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#storage_serialization_policy IcebergTableFromRest#storage_serialization_policy}

---

##### `targetFileSize`<sup>Optional</sup> <a name="targetFileSize" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.targetFileSize"></a>

- *Type:* java.lang.String

Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files.

Valid values are: [AUTO 16MB 32MB 64MB 128MB]. For more information, check [TARGET_FILE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#target-file-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#target_file_size IcebergTableFromRest#target_file_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#timeouts IcebergTableFromRest#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetAutoRefresh">resetAutoRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetCatalogNamespace">resetCatalogNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetEnableIcebergMergeOnRead">resetEnableIcebergMergeOnRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetExternalVolume">resetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetIcebergMergeOnReadBehavior">resetIcebergMergeOnReadBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetPathLayout">resetPathLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetStorageSerializationPolicy">resetStorageSerializationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetTargetFileSize">resetTargetFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.putTimeouts"></a>

```java
public void putTimeouts(IcebergTableFromRestTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a>

---

##### `resetAutoRefresh` <a name="resetAutoRefresh" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetAutoRefresh"></a>

```java
public void resetAutoRefresh()
```

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetCatalogNamespace` <a name="resetCatalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetCatalogNamespace"></a>

```java
public void resetCatalogNamespace()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetComment"></a>

```java
public void resetComment()
```

##### `resetEnableIcebergMergeOnRead` <a name="resetEnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetEnableIcebergMergeOnRead"></a>

```java
public void resetEnableIcebergMergeOnRead()
```

##### `resetExternalVolume` <a name="resetExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetExternalVolume"></a>

```java
public void resetExternalVolume()
```

##### `resetIcebergMergeOnReadBehavior` <a name="resetIcebergMergeOnReadBehavior" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetIcebergMergeOnReadBehavior"></a>

```java
public void resetIcebergMergeOnReadBehavior()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetId"></a>

```java
public void resetId()
```

##### `resetPathLayout` <a name="resetPathLayout" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetPathLayout"></a>

```java
public void resetPathLayout()
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetReplaceInvalidCharacters"></a>

```java
public void resetReplaceInvalidCharacters()
```

##### `resetStorageSerializationPolicy` <a name="resetStorageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetStorageSerializationPolicy"></a>

```java
public void resetStorageSerializationPolicy()
```

##### `resetTargetFileSize` <a name="resetTargetFileSize" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetTargetFileSize"></a>

```java
public void resetTargetFileSize()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IcebergTableFromRest resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRest;

IcebergTableFromRest.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRest;

IcebergTableFromRest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRest;

IcebergTableFromRest.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRest;

IcebergTableFromRest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IcebergTableFromRest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IcebergTableFromRest resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IcebergTableFromRest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IcebergTableFromRest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IcebergTableFromRest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList">IcebergTableFromRestDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList">IcebergTableFromRestParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList">IcebergTableFromRestShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference">IcebergTableFromRestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.autoRefreshInput">autoRefreshInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogNamespaceInput">catalogNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogTableNameInput">catalogTableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.enableIcebergMergeOnReadInput">enableIcebergMergeOnReadInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.externalVolumeInput">externalVolumeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.icebergMergeOnReadBehaviorInput">icebergMergeOnReadBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.pathLayoutInput">pathLayoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.storageSerializationPolicyInput">storageSerializationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.targetFileSizeInput">targetFileSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.autoRefresh">autoRefresh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogNamespace">catalogNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogTableName">catalogTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.enableIcebergMergeOnRead">enableIcebergMergeOnRead</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.icebergMergeOnReadBehavior">icebergMergeOnReadBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.pathLayout">pathLayout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.targetFileSize">targetFileSize</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.describeOutput"></a>

```java
public IcebergTableFromRestDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList">IcebergTableFromRestDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.parameters"></a>

```java
public IcebergTableFromRestParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList">IcebergTableFromRestParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.showOutput"></a>

```java
public IcebergTableFromRestShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList">IcebergTableFromRestShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.timeouts"></a>

```java
public IcebergTableFromRestTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference">IcebergTableFromRestTimeoutsOutputReference</a>

---

##### `autoRefreshInput`<sup>Optional</sup> <a name="autoRefreshInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.autoRefreshInput"></a>

```java
public java.lang.String getAutoRefreshInput();
```

- *Type:* java.lang.String

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `catalogNamespaceInput`<sup>Optional</sup> <a name="catalogNamespaceInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogNamespaceInput"></a>

```java
public java.lang.String getCatalogNamespaceInput();
```

- *Type:* java.lang.String

---

##### `catalogTableNameInput`<sup>Optional</sup> <a name="catalogTableNameInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogTableNameInput"></a>

```java
public java.lang.String getCatalogTableNameInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `enableIcebergMergeOnReadInput`<sup>Optional</sup> <a name="enableIcebergMergeOnReadInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.enableIcebergMergeOnReadInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableIcebergMergeOnReadInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `externalVolumeInput`<sup>Optional</sup> <a name="externalVolumeInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.externalVolumeInput"></a>

```java
public java.lang.String getExternalVolumeInput();
```

- *Type:* java.lang.String

---

##### `icebergMergeOnReadBehaviorInput`<sup>Optional</sup> <a name="icebergMergeOnReadBehaviorInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.icebergMergeOnReadBehaviorInput"></a>

```java
public java.lang.String getIcebergMergeOnReadBehaviorInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathLayoutInput`<sup>Optional</sup> <a name="pathLayoutInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.pathLayoutInput"></a>

```java
public java.lang.String getPathLayoutInput();
```

- *Type:* java.lang.String

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.replaceInvalidCharactersInput"></a>

```java
public java.lang.Boolean|IResolvable getReplaceInvalidCharactersInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `storageSerializationPolicyInput`<sup>Optional</sup> <a name="storageSerializationPolicyInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.storageSerializationPolicyInput"></a>

```java
public java.lang.String getStorageSerializationPolicyInput();
```

- *Type:* java.lang.String

---

##### `targetFileSizeInput`<sup>Optional</sup> <a name="targetFileSizeInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.targetFileSizeInput"></a>

```java
public java.lang.String getTargetFileSizeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.timeoutsInput"></a>

```java
public IResolvable|IcebergTableFromRestTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a>

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.autoRefresh"></a>

```java
public java.lang.String getAutoRefresh();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `catalogNamespace`<sup>Required</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogNamespace"></a>

```java
public java.lang.String getCatalogNamespace();
```

- *Type:* java.lang.String

---

##### `catalogTableName`<sup>Required</sup> <a name="catalogTableName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogTableName"></a>

```java
public java.lang.String getCatalogTableName();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `enableIcebergMergeOnRead`<sup>Required</sup> <a name="enableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.enableIcebergMergeOnRead"></a>

```java
public java.lang.Boolean|IResolvable getEnableIcebergMergeOnRead();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

---

##### `icebergMergeOnReadBehavior`<sup>Required</sup> <a name="icebergMergeOnReadBehavior" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.icebergMergeOnReadBehavior"></a>

```java
public java.lang.String getIcebergMergeOnReadBehavior();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pathLayout`<sup>Required</sup> <a name="pathLayout" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.pathLayout"></a>

```java
public java.lang.String getPathLayout();
```

- *Type:* java.lang.String

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.replaceInvalidCharacters"></a>

```java
public java.lang.Boolean|IResolvable getReplaceInvalidCharacters();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `storageSerializationPolicy`<sup>Required</sup> <a name="storageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.storageSerializationPolicy"></a>

```java
public java.lang.String getStorageSerializationPolicy();
```

- *Type:* java.lang.String

---

##### `targetFileSize`<sup>Required</sup> <a name="targetFileSize" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.targetFileSize"></a>

```java
public java.lang.String getTargetFileSize();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IcebergTableFromRestConfig <a name="IcebergTableFromRestConfig" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestConfig;

IcebergTableFromRestConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogTableName(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .autoRefresh(java.lang.String)
//  .catalog(java.lang.String)
//  .catalogNamespace(java.lang.String)
//  .comment(java.lang.String)
//  .enableIcebergMergeOnRead(java.lang.Boolean|IResolvable)
//  .externalVolume(java.lang.String)
//  .icebergMergeOnReadBehavior(java.lang.String)
//  .id(java.lang.String)
//  .pathLayout(java.lang.String)
//  .replaceInvalidCharacters(java.lang.Boolean|IResolvable)
//  .storageSerializationPolicy(java.lang.String)
//  .targetFileSize(java.lang.String)
//  .timeouts(IcebergTableFromRestTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.catalogTableName">catalogTableName</a></code> | <code>java.lang.String</code> | Specifies the name of the table as it appears in the external catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.autoRefresh">autoRefresh</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the external catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.catalogNamespace">catalogNamespace</a></code> | <code>java.lang.String</code> | Specifies the namespace (or database) in the external catalog that the table belongs to. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.enableIcebergMergeOnRead">enableIcebergMergeOnRead</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read). |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.icebergMergeOnReadBehavior">icebergMergeOnReadBehavior</a></code> | <code>java.lang.String</code> | Specifies the merge-on-read behavior for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#id IcebergTableFromRest#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.pathLayout">pathLayout</a></code> | <code>java.lang.String</code> | Specifies the storage layout for the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>java.lang.String</code> | Specifies the storage serialization policy for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.targetFileSize">targetFileSize</a></code> | <code>java.lang.String</code> | Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogTableName`<sup>Required</sup> <a name="catalogTableName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.catalogTableName"></a>

```java
public java.lang.String getCatalogTableName();
```

- *Type:* java.lang.String

Specifies the name of the table as it appears in the external catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#catalog_table_name IcebergTableFromRest#catalog_table_name}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#database IcebergTableFromRest#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#name IcebergTableFromRest#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#schema IcebergTableFromRest#schema}

---

##### `autoRefresh`<sup>Optional</sup> <a name="autoRefresh" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.autoRefresh"></a>

```java
public java.lang.String getAutoRefresh();
```

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the external catalog.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#auto_refresh IcebergTableFromRest#auto_refresh}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#catalog IcebergTableFromRest#catalog}

---

##### `catalogNamespace`<sup>Optional</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.catalogNamespace"></a>

```java
public java.lang.String getCatalogNamespace();
```

- *Type:* java.lang.String

Specifies the namespace (or database) in the external catalog that the table belongs to.

If not specified, the catalog integration's default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#catalog_namespace IcebergTableFromRest#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#comment IcebergTableFromRest#comment}

---

##### `enableIcebergMergeOnRead`<sup>Optional</sup> <a name="enableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.enableIcebergMergeOnRead"></a>

```java
public java.lang.Boolean|IResolvable getEnableIcebergMergeOnRead();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#enable_iceberg_merge_on_read IcebergTableFromRest#enable_iceberg_merge_on_read}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#external_volume IcebergTableFromRest#external_volume}

---

##### `icebergMergeOnReadBehavior`<sup>Optional</sup> <a name="icebergMergeOnReadBehavior" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.icebergMergeOnReadBehavior"></a>

```java
public java.lang.String getIcebergMergeOnReadBehavior();
```

- *Type:* java.lang.String

Specifies the merge-on-read behavior for the Iceberg table.

Valid values are: [AUTO ENABLED DISABLED]. Cannot be changed after creation. For more information, check [ICEBERG_MERGE_ON_READ_BEHAVIOR docs](https://docs.snowflake.com/en/sql-reference/parameters#iceberg-merge-on-read-behavior).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#iceberg_merge_on_read_behavior IcebergTableFromRest#iceberg_merge_on_read_behavior}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#id IcebergTableFromRest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pathLayout`<sup>Optional</sup> <a name="pathLayout" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.pathLayout"></a>

```java
public java.lang.String getPathLayout();
```

- *Type:* java.lang.String

Specifies the storage layout for the Iceberg table's Parquet files.

Valid values are: [FLAT HIERARCHICAL]. Cannot be changed after creation. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#path_layout IcebergTableFromRest#path_layout}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.replaceInvalidCharacters"></a>

```java
public java.lang.Boolean|IResolvable getReplaceInvalidCharacters();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#replace_invalid_characters IcebergTableFromRest#replace_invalid_characters}

---

##### `storageSerializationPolicy`<sup>Optional</sup> <a name="storageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.storageSerializationPolicy"></a>

```java
public java.lang.String getStorageSerializationPolicy();
```

- *Type:* java.lang.String

Specifies the storage serialization policy for the Iceberg table.

Valid values are: [COMPATIBLE OPTIMIZED]. Cannot be changed after creation. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#storage_serialization_policy IcebergTableFromRest#storage_serialization_policy}

---

##### `targetFileSize`<sup>Optional</sup> <a name="targetFileSize" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.targetFileSize"></a>

```java
public java.lang.String getTargetFileSize();
```

- *Type:* java.lang.String

Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files.

Valid values are: [AUTO 16MB 32MB 64MB 128MB]. For more information, check [TARGET_FILE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#target-file-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#target_file_size IcebergTableFromRest#target_file_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.timeouts"></a>

```java
public IcebergTableFromRestTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#timeouts IcebergTableFromRest#timeouts}

---

### IcebergTableFromRestDescribeOutput <a name="IcebergTableFromRestDescribeOutput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestDescribeOutput;

IcebergTableFromRestDescribeOutput.builder()
    .build();
```


### IcebergTableFromRestParameters <a name="IcebergTableFromRestParameters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParameters.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParameters;

IcebergTableFromRestParameters.builder()
    .build();
```


### IcebergTableFromRestParametersCatalog <a name="IcebergTableFromRestParametersCatalog" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalog.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersCatalog;

IcebergTableFromRestParametersCatalog.builder()
    .build();
```


### IcebergTableFromRestParametersEnableIcebergMergeOnRead <a name="IcebergTableFromRestParametersEnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnRead"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnRead.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersEnableIcebergMergeOnRead;

IcebergTableFromRestParametersEnableIcebergMergeOnRead.builder()
    .build();
```


### IcebergTableFromRestParametersExternalVolume <a name="IcebergTableFromRestParametersExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolume.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersExternalVolume;

IcebergTableFromRestParametersExternalVolume.builder()
    .build();
```


### IcebergTableFromRestParametersIcebergMergeOnReadBehavior <a name="IcebergTableFromRestParametersIcebergMergeOnReadBehavior" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehavior.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersIcebergMergeOnReadBehavior;

IcebergTableFromRestParametersIcebergMergeOnReadBehavior.builder()
    .build();
```


### IcebergTableFromRestParametersReplaceInvalidCharacters <a name="IcebergTableFromRestParametersReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharacters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharacters.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersReplaceInvalidCharacters;

IcebergTableFromRestParametersReplaceInvalidCharacters.builder()
    .build();
```


### IcebergTableFromRestParametersStorageSerializationPolicy <a name="IcebergTableFromRestParametersStorageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicy.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersStorageSerializationPolicy;

IcebergTableFromRestParametersStorageSerializationPolicy.builder()
    .build();
```


### IcebergTableFromRestParametersTargetFileSize <a name="IcebergTableFromRestParametersTargetFileSize" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSize.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersTargetFileSize;

IcebergTableFromRestParametersTargetFileSize.builder()
    .build();
```


### IcebergTableFromRestShowOutput <a name="IcebergTableFromRestShowOutput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestShowOutput;

IcebergTableFromRestShowOutput.builder()
    .build();
```


### IcebergTableFromRestShowOutputAutoRefreshStatus <a name="IcebergTableFromRestShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatus.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestShowOutputAutoRefreshStatus;

IcebergTableFromRestShowOutputAutoRefreshStatus.builder()
    .build();
```


### IcebergTableFromRestShowOutputPartitionSpecs <a name="IcebergTableFromRestShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecs.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestShowOutputPartitionSpecs;

IcebergTableFromRestShowOutputPartitionSpecs.builder()
    .build();
```


### IcebergTableFromRestShowOutputPartitionSpecsFields <a name="IcebergTableFromRestShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFields.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestShowOutputPartitionSpecsFields;

IcebergTableFromRestShowOutputPartitionSpecsFields.builder()
    .build();
```


### IcebergTableFromRestTimeouts <a name="IcebergTableFromRestTimeouts" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestTimeouts;

IcebergTableFromRestTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#create IcebergTableFromRest#create}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#delete IcebergTableFromRest#delete}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#read IcebergTableFromRest#read}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#update IcebergTableFromRest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#create IcebergTableFromRest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#delete IcebergTableFromRest#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#read IcebergTableFromRest#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#update IcebergTableFromRest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IcebergTableFromRestDescribeOutputList <a name="IcebergTableFromRestDescribeOutputList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestDescribeOutputList;

new IcebergTableFromRestDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.get"></a>

```java
public IcebergTableFromRestDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromRestDescribeOutputOutputReference <a name="IcebergTableFromRestDescribeOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestDescribeOutputOutputReference;

new IcebergTableFromRestDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.check">check</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.isNullable">isNullable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.nameMapping">nameMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.primaryKey">primaryKey</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.privacyDomain">privacyDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.sourceIcebergType">sourceIcebergType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.uniqueKey">uniqueKey</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.writeDefault">writeDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutput">IcebergTableFromRestDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.check"></a>

```java
public java.lang.String getCheck();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `isNullable`<sup>Required</sup> <a name="isNullable" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.isNullable"></a>

```java
public IResolvable getIsNullable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameMapping`<sup>Required</sup> <a name="nameMapping" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.nameMapping"></a>

```java
public java.lang.String getNameMapping();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.primaryKey"></a>

```java
public IResolvable getPrimaryKey();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `privacyDomain`<sup>Required</sup> <a name="privacyDomain" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.privacyDomain"></a>

```java
public java.lang.String getPrivacyDomain();
```

- *Type:* java.lang.String

---

##### `sourceIcebergType`<sup>Required</sup> <a name="sourceIcebergType" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.sourceIcebergType"></a>

```java
public java.lang.String getSourceIcebergType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.uniqueKey"></a>

```java
public IResolvable getUniqueKey();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `writeDefault`<sup>Required</sup> <a name="writeDefault" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.writeDefault"></a>

```java
public java.lang.String getWriteDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.internalValue"></a>

```java
public IcebergTableFromRestDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutput">IcebergTableFromRestDescribeOutput</a>

---


### IcebergTableFromRestParametersCatalogList <a name="IcebergTableFromRestParametersCatalogList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersCatalogList;

new IcebergTableFromRestParametersCatalogList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.get"></a>

```java
public IcebergTableFromRestParametersCatalogOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromRestParametersCatalogOutputReference <a name="IcebergTableFromRestParametersCatalogOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersCatalogOutputReference;

new IcebergTableFromRestParametersCatalogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalog">IcebergTableFromRestParametersCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.internalValue"></a>

```java
public IcebergTableFromRestParametersCatalog getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalog">IcebergTableFromRestParametersCatalog</a>

---


### IcebergTableFromRestParametersEnableIcebergMergeOnReadList <a name="IcebergTableFromRestParametersEnableIcebergMergeOnReadList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList;

new IcebergTableFromRestParametersEnableIcebergMergeOnReadList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.get"></a>

```java
public IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference <a name="IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference;

new IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnRead">IcebergTableFromRestParametersEnableIcebergMergeOnRead</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.internalValue"></a>

```java
public IcebergTableFromRestParametersEnableIcebergMergeOnRead getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnRead">IcebergTableFromRestParametersEnableIcebergMergeOnRead</a>

---


### IcebergTableFromRestParametersExternalVolumeList <a name="IcebergTableFromRestParametersExternalVolumeList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersExternalVolumeList;

new IcebergTableFromRestParametersExternalVolumeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.get"></a>

```java
public IcebergTableFromRestParametersExternalVolumeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromRestParametersExternalVolumeOutputReference <a name="IcebergTableFromRestParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersExternalVolumeOutputReference;

new IcebergTableFromRestParametersExternalVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolume">IcebergTableFromRestParametersExternalVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.internalValue"></a>

```java
public IcebergTableFromRestParametersExternalVolume getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolume">IcebergTableFromRestParametersExternalVolume</a>

---


### IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList <a name="IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList;

new IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.get"></a>

```java
public IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference <a name="IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference;

new IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehavior">IcebergTableFromRestParametersIcebergMergeOnReadBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.internalValue"></a>

```java
public IcebergTableFromRestParametersIcebergMergeOnReadBehavior getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehavior">IcebergTableFromRestParametersIcebergMergeOnReadBehavior</a>

---


### IcebergTableFromRestParametersList <a name="IcebergTableFromRestParametersList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersList;

new IcebergTableFromRestParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.get"></a>

```java
public IcebergTableFromRestParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromRestParametersOutputReference <a name="IcebergTableFromRestParametersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersOutputReference;

new IcebergTableFromRestParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList">IcebergTableFromRestParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.enableIcebergMergeOnRead">enableIcebergMergeOnRead</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList">IcebergTableFromRestParametersEnableIcebergMergeOnReadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.externalVolume">externalVolume</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList">IcebergTableFromRestParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.icebergMergeOnReadBehavior">icebergMergeOnReadBehavior</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList">IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList">IcebergTableFromRestParametersReplaceInvalidCharactersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList">IcebergTableFromRestParametersStorageSerializationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.targetFileSize">targetFileSize</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList">IcebergTableFromRestParametersTargetFileSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParameters">IcebergTableFromRestParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.catalog"></a>

```java
public IcebergTableFromRestParametersCatalogList getCatalog();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList">IcebergTableFromRestParametersCatalogList</a>

---

##### `enableIcebergMergeOnRead`<sup>Required</sup> <a name="enableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.enableIcebergMergeOnRead"></a>

```java
public IcebergTableFromRestParametersEnableIcebergMergeOnReadList getEnableIcebergMergeOnRead();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList">IcebergTableFromRestParametersEnableIcebergMergeOnReadList</a>

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.externalVolume"></a>

```java
public IcebergTableFromRestParametersExternalVolumeList getExternalVolume();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList">IcebergTableFromRestParametersExternalVolumeList</a>

---

##### `icebergMergeOnReadBehavior`<sup>Required</sup> <a name="icebergMergeOnReadBehavior" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.icebergMergeOnReadBehavior"></a>

```java
public IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList getIcebergMergeOnReadBehavior();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList">IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList</a>

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.replaceInvalidCharacters"></a>

```java
public IcebergTableFromRestParametersReplaceInvalidCharactersList getReplaceInvalidCharacters();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList">IcebergTableFromRestParametersReplaceInvalidCharactersList</a>

---

##### `storageSerializationPolicy`<sup>Required</sup> <a name="storageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.storageSerializationPolicy"></a>

```java
public IcebergTableFromRestParametersStorageSerializationPolicyList getStorageSerializationPolicy();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList">IcebergTableFromRestParametersStorageSerializationPolicyList</a>

---

##### `targetFileSize`<sup>Required</sup> <a name="targetFileSize" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.targetFileSize"></a>

```java
public IcebergTableFromRestParametersTargetFileSizeList getTargetFileSize();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList">IcebergTableFromRestParametersTargetFileSizeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.internalValue"></a>

```java
public IcebergTableFromRestParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParameters">IcebergTableFromRestParameters</a>

---


### IcebergTableFromRestParametersReplaceInvalidCharactersList <a name="IcebergTableFromRestParametersReplaceInvalidCharactersList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersReplaceInvalidCharactersList;

new IcebergTableFromRestParametersReplaceInvalidCharactersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.get"></a>

```java
public IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference <a name="IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference;

new IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharacters">IcebergTableFromRestParametersReplaceInvalidCharacters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.internalValue"></a>

```java
public IcebergTableFromRestParametersReplaceInvalidCharacters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharacters">IcebergTableFromRestParametersReplaceInvalidCharacters</a>

---


### IcebergTableFromRestParametersStorageSerializationPolicyList <a name="IcebergTableFromRestParametersStorageSerializationPolicyList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersStorageSerializationPolicyList;

new IcebergTableFromRestParametersStorageSerializationPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.get"></a>

```java
public IcebergTableFromRestParametersStorageSerializationPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromRestParametersStorageSerializationPolicyOutputReference <a name="IcebergTableFromRestParametersStorageSerializationPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference;

new IcebergTableFromRestParametersStorageSerializationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicy">IcebergTableFromRestParametersStorageSerializationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.internalValue"></a>

```java
public IcebergTableFromRestParametersStorageSerializationPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicy">IcebergTableFromRestParametersStorageSerializationPolicy</a>

---


### IcebergTableFromRestParametersTargetFileSizeList <a name="IcebergTableFromRestParametersTargetFileSizeList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersTargetFileSizeList;

new IcebergTableFromRestParametersTargetFileSizeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.get"></a>

```java
public IcebergTableFromRestParametersTargetFileSizeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromRestParametersTargetFileSizeOutputReference <a name="IcebergTableFromRestParametersTargetFileSizeOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestParametersTargetFileSizeOutputReference;

new IcebergTableFromRestParametersTargetFileSizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSize">IcebergTableFromRestParametersTargetFileSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.internalValue"></a>

```java
public IcebergTableFromRestParametersTargetFileSize getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSize">IcebergTableFromRestParametersTargetFileSize</a>

---


### IcebergTableFromRestShowOutputAutoRefreshStatusList <a name="IcebergTableFromRestShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestShowOutputAutoRefreshStatusList;

new IcebergTableFromRestShowOutputAutoRefreshStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.get"></a>

```java
public IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference <a name="IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference;

new IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">currentSnapshotId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.executionState">executionState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">lastSnapshotTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">pendingSnapshotCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatus">IcebergTableFromRestShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentSnapshotId`<sup>Required</sup> <a name="currentSnapshotId" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```java
public java.lang.Number getCurrentSnapshotId();
```

- *Type:* java.lang.Number

---

##### `executionState`<sup>Required</sup> <a name="executionState" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```java
public java.lang.String getExecutionState();
```

- *Type:* java.lang.String

---

##### `lastSnapshotTime`<sup>Required</sup> <a name="lastSnapshotTime" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```java
public java.lang.String getLastSnapshotTime();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `pendingSnapshotCount`<sup>Required</sup> <a name="pendingSnapshotCount" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```java
public java.lang.Number getPendingSnapshotCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```java
public IcebergTableFromRestShowOutputAutoRefreshStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatus">IcebergTableFromRestShowOutputAutoRefreshStatus</a>

---


### IcebergTableFromRestShowOutputList <a name="IcebergTableFromRestShowOutputList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestShowOutputList;

new IcebergTableFromRestShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.get"></a>

```java
public IcebergTableFromRestShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromRestShowOutputOutputReference <a name="IcebergTableFromRestShowOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestShowOutputOutputReference;

new IcebergTableFromRestShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.autoRefreshStatus">autoRefreshStatus</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList">IcebergTableFromRestShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.baseLocation">baseLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.canWriteMetadata">canWriteMetadata</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogNamespace">catalogNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogSyncName">catalogSyncName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogTableName">catalogTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.currentPartitionSpecId">currentPartitionSpecId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.externalVolumeName">externalVolumeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.icebergTableFormatVersion">icebergTableFormatVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.icebergTableType">icebergTableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.nameMapping">nameMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.partitionSpecs">partitionSpecs</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList">IcebergTableFromRestShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutput">IcebergTableFromRestShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoRefreshStatus`<sup>Required</sup> <a name="autoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.autoRefreshStatus"></a>

```java
public IcebergTableFromRestShowOutputAutoRefreshStatusList getAutoRefreshStatus();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList">IcebergTableFromRestShowOutputAutoRefreshStatusList</a>

---

##### `baseLocation`<sup>Required</sup> <a name="baseLocation" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.baseLocation"></a>

```java
public java.lang.String getBaseLocation();
```

- *Type:* java.lang.String

---

##### `canWriteMetadata`<sup>Required</sup> <a name="canWriteMetadata" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.canWriteMetadata"></a>

```java
public IResolvable getCanWriteMetadata();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `catalogNamespace`<sup>Required</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogNamespace"></a>

```java
public java.lang.String getCatalogNamespace();
```

- *Type:* java.lang.String

---

##### `catalogSyncName`<sup>Required</sup> <a name="catalogSyncName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogSyncName"></a>

```java
public java.lang.String getCatalogSyncName();
```

- *Type:* java.lang.String

---

##### `catalogTableName`<sup>Required</sup> <a name="catalogTableName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogTableName"></a>

```java
public java.lang.String getCatalogTableName();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `currentPartitionSpecId`<sup>Required</sup> <a name="currentPartitionSpecId" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.currentPartitionSpecId"></a>

```java
public java.lang.Number getCurrentPartitionSpecId();
```

- *Type:* java.lang.Number

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `externalVolumeName`<sup>Required</sup> <a name="externalVolumeName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.externalVolumeName"></a>

```java
public java.lang.String getExternalVolumeName();
```

- *Type:* java.lang.String

---

##### `icebergTableFormatVersion`<sup>Required</sup> <a name="icebergTableFormatVersion" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```java
public java.lang.Number getIcebergTableFormatVersion();
```

- *Type:* java.lang.Number

---

##### `icebergTableType`<sup>Required</sup> <a name="icebergTableType" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.icebergTableType"></a>

```java
public java.lang.String getIcebergTableType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameMapping`<sup>Required</sup> <a name="nameMapping" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.nameMapping"></a>

```java
public java.lang.String getNameMapping();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `partitionSpecs`<sup>Required</sup> <a name="partitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.partitionSpecs"></a>

```java
public IcebergTableFromRestShowOutputPartitionSpecsList getPartitionSpecs();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList">IcebergTableFromRestShowOutputPartitionSpecsList</a>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.internalValue"></a>

```java
public IcebergTableFromRestShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutput">IcebergTableFromRestShowOutput</a>

---


### IcebergTableFromRestShowOutputPartitionSpecsFieldsList <a name="IcebergTableFromRestShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList;

new IcebergTableFromRestShowOutputPartitionSpecsFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.get"></a>

```java
public IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference <a name="IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference;

new IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.transform">transform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFields">IcebergTableFromRestShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```java
public java.lang.Number getFieldId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```java
public java.lang.Number getSourceId();
```

- *Type:* java.lang.Number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```java
public java.lang.String getTransform();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```java
public IcebergTableFromRestShowOutputPartitionSpecsFields getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFields">IcebergTableFromRestShowOutputPartitionSpecsFields</a>

---


### IcebergTableFromRestShowOutputPartitionSpecsList <a name="IcebergTableFromRestShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestShowOutputPartitionSpecsList;

new IcebergTableFromRestShowOutputPartitionSpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.get"></a>

```java
public IcebergTableFromRestShowOutputPartitionSpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromRestShowOutputPartitionSpecsOutputReference <a name="IcebergTableFromRestShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference;

new IcebergTableFromRestShowOutputPartitionSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList">IcebergTableFromRestShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.specId">specId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecs">IcebergTableFromRestShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.fields"></a>

```java
public IcebergTableFromRestShowOutputPartitionSpecsFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList">IcebergTableFromRestShowOutputPartitionSpecsFieldsList</a>

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.specId"></a>

```java
public java.lang.Number getSpecId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```java
public IcebergTableFromRestShowOutputPartitionSpecs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecs">IcebergTableFromRestShowOutputPartitionSpecs</a>

---


### IcebergTableFromRestTimeoutsOutputReference <a name="IcebergTableFromRestTimeoutsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_rest.IcebergTableFromRestTimeoutsOutputReference;

new IcebergTableFromRestTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|IcebergTableFromRestTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a>

---



