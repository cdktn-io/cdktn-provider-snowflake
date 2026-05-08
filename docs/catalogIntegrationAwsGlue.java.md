# `catalogIntegrationAwsGlue` Submodule <a name="`catalogIntegrationAwsGlue` Submodule" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogIntegrationAwsGlue <a name="CatalogIntegrationAwsGlue" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue snowflake_catalog_integration_aws_glue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer"></a>

```java
import io.cdktn.providers.snowflake.catalog_integration_aws_glue.CatalogIntegrationAwsGlue;

CatalogIntegrationAwsGlue.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enabled(java.lang.Boolean|IResolvable)
    .glueAwsRoleArn(java.lang.String)
    .glueCatalogId(java.lang.String)
    .name(java.lang.String)
//  .catalogNamespace(java.lang.String)
//  .comment(java.lang.String)
//  .glueRegion(java.lang.String)
//  .id(java.lang.String)
//  .refreshIntervalSeconds(java.lang.Number)
//  .timeouts(CatalogIntegrationAwsGlueTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.glueAwsRoleArn">glueAwsRoleArn</a></code> | <code>java.lang.String</code> | Specifies the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to assume. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.glueCatalogId">glueCatalogId</a></code> | <code>java.lang.String</code> | Specifies the ID of your AWS account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.catalogNamespace">catalogNamespace</a></code> | <code>java.lang.String</code> | Specifies the default AWS Glue Data Catalog namespace for all Iceberg tables that you associate with the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.glueRegion">glueRegion</a></code> | <code>java.lang.String</code> | Specifies the AWS region of your AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#id CatalogIntegrationAwsGlue#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.refreshIntervalSeconds">refreshIntervalSeconds</a></code> | <code>java.lang.Number</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#enabled CatalogIntegrationAwsGlue#enabled}

---

##### `glueAwsRoleArn`<sup>Required</sup> <a name="glueAwsRoleArn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.glueAwsRoleArn"></a>

- *Type:* java.lang.String

Specifies the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#glue_aws_role_arn CatalogIntegrationAwsGlue#glue_aws_role_arn}

---

##### `glueCatalogId`<sup>Required</sup> <a name="glueCatalogId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.glueCatalogId"></a>

- *Type:* java.lang.String

Specifies the ID of your AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#glue_catalog_id CatalogIntegrationAwsGlue#glue_catalog_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#name CatalogIntegrationAwsGlue#name}

---

##### `catalogNamespace`<sup>Optional</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.catalogNamespace"></a>

- *Type:* java.lang.String

Specifies the default AWS Glue Data Catalog namespace for all Iceberg tables that you associate with the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#catalog_namespace CatalogIntegrationAwsGlue#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#comment CatalogIntegrationAwsGlue#comment}

---

##### `glueRegion`<sup>Optional</sup> <a name="glueRegion" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.glueRegion"></a>

- *Type:* java.lang.String

Specifies the AWS region of your AWS Glue Data Catalog.

You must specify a value for this attribute if your Snowflake account is not hosted on AWS. Otherwise, the default region is the Snowflake deployment region for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#glue_region CatalogIntegrationAwsGlue#glue_region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#id CatalogIntegrationAwsGlue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshIntervalSeconds`<sup>Optional</sup> <a name="refreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.refreshIntervalSeconds"></a>

- *Type:* java.lang.Number

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#refresh_interval_seconds CatalogIntegrationAwsGlue#refresh_interval_seconds}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#timeouts CatalogIntegrationAwsGlue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetCatalogNamespace">resetCatalogNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetGlueRegion">resetGlueRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetRefreshIntervalSeconds">resetRefreshIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.putTimeouts"></a>

```java
public void putTimeouts(CatalogIntegrationAwsGlueTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a>

---

##### `resetCatalogNamespace` <a name="resetCatalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetCatalogNamespace"></a>

```java
public void resetCatalogNamespace()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetComment"></a>

```java
public void resetComment()
```

##### `resetGlueRegion` <a name="resetGlueRegion" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetGlueRegion"></a>

```java
public void resetGlueRegion()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetId"></a>

```java
public void resetId()
```

##### `resetRefreshIntervalSeconds` <a name="resetRefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetRefreshIntervalSeconds"></a>

```java
public void resetRefreshIntervalSeconds()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CatalogIntegrationAwsGlue resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.catalog_integration_aws_glue.CatalogIntegrationAwsGlue;

CatalogIntegrationAwsGlue.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.catalog_integration_aws_glue.CatalogIntegrationAwsGlue;

CatalogIntegrationAwsGlue.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.catalog_integration_aws_glue.CatalogIntegrationAwsGlue;

CatalogIntegrationAwsGlue.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.catalog_integration_aws_glue.CatalogIntegrationAwsGlue;

CatalogIntegrationAwsGlue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CatalogIntegrationAwsGlue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CatalogIntegrationAwsGlue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CatalogIntegrationAwsGlue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CatalogIntegrationAwsGlue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CatalogIntegrationAwsGlue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.catalogSource">catalogSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList">CatalogIntegrationAwsGlueDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList">CatalogIntegrationAwsGlueShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference">CatalogIntegrationAwsGlueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.catalogNamespaceInput">catalogNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueAwsRoleArnInput">glueAwsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueCatalogIdInput">glueCatalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueRegionInput">glueRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.refreshIntervalSecondsInput">refreshIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.catalogNamespace">catalogNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueAwsRoleArn">glueAwsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueCatalogId">glueCatalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueRegion">glueRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.refreshIntervalSeconds">refreshIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogSource`<sup>Required</sup> <a name="catalogSource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.catalogSource"></a>

```java
public java.lang.String getCatalogSource();
```

- *Type:* java.lang.String

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.describeOutput"></a>

```java
public CatalogIntegrationAwsGlueDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList">CatalogIntegrationAwsGlueDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.showOutput"></a>

```java
public CatalogIntegrationAwsGlueShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList">CatalogIntegrationAwsGlueShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.timeouts"></a>

```java
public CatalogIntegrationAwsGlueTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference">CatalogIntegrationAwsGlueTimeoutsOutputReference</a>

---

##### `catalogNamespaceInput`<sup>Optional</sup> <a name="catalogNamespaceInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.catalogNamespaceInput"></a>

```java
public java.lang.String getCatalogNamespaceInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `glueAwsRoleArnInput`<sup>Optional</sup> <a name="glueAwsRoleArnInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueAwsRoleArnInput"></a>

```java
public java.lang.String getGlueAwsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `glueCatalogIdInput`<sup>Optional</sup> <a name="glueCatalogIdInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueCatalogIdInput"></a>

```java
public java.lang.String getGlueCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `glueRegionInput`<sup>Optional</sup> <a name="glueRegionInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueRegionInput"></a>

```java
public java.lang.String getGlueRegionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `refreshIntervalSecondsInput`<sup>Optional</sup> <a name="refreshIntervalSecondsInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.refreshIntervalSecondsInput"></a>

```java
public java.lang.Number getRefreshIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.timeoutsInput"></a>

```java
public IResolvable|CatalogIntegrationAwsGlueTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a>

---

##### `catalogNamespace`<sup>Required</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.catalogNamespace"></a>

```java
public java.lang.String getCatalogNamespace();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `glueAwsRoleArn`<sup>Required</sup> <a name="glueAwsRoleArn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueAwsRoleArn"></a>

```java
public java.lang.String getGlueAwsRoleArn();
```

- *Type:* java.lang.String

---

##### `glueCatalogId`<sup>Required</sup> <a name="glueCatalogId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueCatalogId"></a>

```java
public java.lang.String getGlueCatalogId();
```

- *Type:* java.lang.String

---

##### `glueRegion`<sup>Required</sup> <a name="glueRegion" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueRegion"></a>

```java
public java.lang.String getGlueRegion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `refreshIntervalSeconds`<sup>Required</sup> <a name="refreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.refreshIntervalSeconds"></a>

```java
public java.lang.Number getRefreshIntervalSeconds();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogIntegrationAwsGlueConfig <a name="CatalogIntegrationAwsGlueConfig" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.catalog_integration_aws_glue.CatalogIntegrationAwsGlueConfig;

CatalogIntegrationAwsGlueConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enabled(java.lang.Boolean|IResolvable)
    .glueAwsRoleArn(java.lang.String)
    .glueCatalogId(java.lang.String)
    .name(java.lang.String)
//  .catalogNamespace(java.lang.String)
//  .comment(java.lang.String)
//  .glueRegion(java.lang.String)
//  .id(java.lang.String)
//  .refreshIntervalSeconds(java.lang.Number)
//  .timeouts(CatalogIntegrationAwsGlueTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueAwsRoleArn">glueAwsRoleArn</a></code> | <code>java.lang.String</code> | Specifies the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to assume. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueCatalogId">glueCatalogId</a></code> | <code>java.lang.String</code> | Specifies the ID of your AWS account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.catalogNamespace">catalogNamespace</a></code> | <code>java.lang.String</code> | Specifies the default AWS Glue Data Catalog namespace for all Iceberg tables that you associate with the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueRegion">glueRegion</a></code> | <code>java.lang.String</code> | Specifies the AWS region of your AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#id CatalogIntegrationAwsGlue#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.refreshIntervalSeconds">refreshIntervalSeconds</a></code> | <code>java.lang.Number</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#enabled CatalogIntegrationAwsGlue#enabled}

---

##### `glueAwsRoleArn`<sup>Required</sup> <a name="glueAwsRoleArn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueAwsRoleArn"></a>

```java
public java.lang.String getGlueAwsRoleArn();
```

- *Type:* java.lang.String

Specifies the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#glue_aws_role_arn CatalogIntegrationAwsGlue#glue_aws_role_arn}

---

##### `glueCatalogId`<sup>Required</sup> <a name="glueCatalogId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueCatalogId"></a>

```java
public java.lang.String getGlueCatalogId();
```

- *Type:* java.lang.String

Specifies the ID of your AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#glue_catalog_id CatalogIntegrationAwsGlue#glue_catalog_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#name CatalogIntegrationAwsGlue#name}

---

##### `catalogNamespace`<sup>Optional</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.catalogNamespace"></a>

```java
public java.lang.String getCatalogNamespace();
```

- *Type:* java.lang.String

Specifies the default AWS Glue Data Catalog namespace for all Iceberg tables that you associate with the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#catalog_namespace CatalogIntegrationAwsGlue#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#comment CatalogIntegrationAwsGlue#comment}

---

##### `glueRegion`<sup>Optional</sup> <a name="glueRegion" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueRegion"></a>

```java
public java.lang.String getGlueRegion();
```

- *Type:* java.lang.String

Specifies the AWS region of your AWS Glue Data Catalog.

You must specify a value for this attribute if your Snowflake account is not hosted on AWS. Otherwise, the default region is the Snowflake deployment region for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#glue_region CatalogIntegrationAwsGlue#glue_region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#id CatalogIntegrationAwsGlue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshIntervalSeconds`<sup>Optional</sup> <a name="refreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.refreshIntervalSeconds"></a>

```java
public java.lang.Number getRefreshIntervalSeconds();
```

- *Type:* java.lang.Number

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#refresh_interval_seconds CatalogIntegrationAwsGlue#refresh_interval_seconds}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.timeouts"></a>

```java
public CatalogIntegrationAwsGlueTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#timeouts CatalogIntegrationAwsGlue#timeouts}

---

### CatalogIntegrationAwsGlueDescribeOutput <a name="CatalogIntegrationAwsGlueDescribeOutput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.catalog_integration_aws_glue.CatalogIntegrationAwsGlueDescribeOutput;

CatalogIntegrationAwsGlueDescribeOutput.builder()
    .build();
```


### CatalogIntegrationAwsGlueShowOutput <a name="CatalogIntegrationAwsGlueShowOutput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.catalog_integration_aws_glue.CatalogIntegrationAwsGlueShowOutput;

CatalogIntegrationAwsGlueShowOutput.builder()
    .build();
```


### CatalogIntegrationAwsGlueTimeouts <a name="CatalogIntegrationAwsGlueTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.catalog_integration_aws_glue.CatalogIntegrationAwsGlueTimeouts;

CatalogIntegrationAwsGlueTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#create CatalogIntegrationAwsGlue#create}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#delete CatalogIntegrationAwsGlue#delete}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#read CatalogIntegrationAwsGlue#read}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#update CatalogIntegrationAwsGlue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#create CatalogIntegrationAwsGlue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#delete CatalogIntegrationAwsGlue#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#read CatalogIntegrationAwsGlue#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/catalog_integration_aws_glue#update CatalogIntegrationAwsGlue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogIntegrationAwsGlueDescribeOutputList <a name="CatalogIntegrationAwsGlueDescribeOutputList" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.catalog_integration_aws_glue.CatalogIntegrationAwsGlueDescribeOutputList;

new CatalogIntegrationAwsGlueDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.get"></a>

```java
public CatalogIntegrationAwsGlueDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CatalogIntegrationAwsGlueDescribeOutputOutputReference <a name="CatalogIntegrationAwsGlueDescribeOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.catalog_integration_aws_glue.CatalogIntegrationAwsGlueDescribeOutputOutputReference;

new CatalogIntegrationAwsGlueDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.catalogNamespace">catalogNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.catalogSource">catalogSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueAwsRoleArn">glueAwsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueCatalogId">glueCatalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueRegion">glueRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.refreshIntervalSeconds">refreshIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.tableFormat">tableFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutput">CatalogIntegrationAwsGlueDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNamespace`<sup>Required</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.catalogNamespace"></a>

```java
public java.lang.String getCatalogNamespace();
```

- *Type:* java.lang.String

---

##### `catalogSource`<sup>Required</sup> <a name="catalogSource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.catalogSource"></a>

```java
public java.lang.String getCatalogSource();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `glueAwsRoleArn`<sup>Required</sup> <a name="glueAwsRoleArn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueAwsRoleArn"></a>

```java
public java.lang.String getGlueAwsRoleArn();
```

- *Type:* java.lang.String

---

##### `glueCatalogId`<sup>Required</sup> <a name="glueCatalogId" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueCatalogId"></a>

```java
public java.lang.String getGlueCatalogId();
```

- *Type:* java.lang.String

---

##### `glueRegion`<sup>Required</sup> <a name="glueRegion" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueRegion"></a>

```java
public java.lang.String getGlueRegion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `refreshIntervalSeconds`<sup>Required</sup> <a name="refreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.refreshIntervalSeconds"></a>

```java
public java.lang.Number getRefreshIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `tableFormat`<sup>Required</sup> <a name="tableFormat" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.tableFormat"></a>

```java
public java.lang.String getTableFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.internalValue"></a>

```java
public CatalogIntegrationAwsGlueDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutput">CatalogIntegrationAwsGlueDescribeOutput</a>

---


### CatalogIntegrationAwsGlueShowOutputList <a name="CatalogIntegrationAwsGlueShowOutputList" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.catalog_integration_aws_glue.CatalogIntegrationAwsGlueShowOutputList;

new CatalogIntegrationAwsGlueShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.get"></a>

```java
public CatalogIntegrationAwsGlueShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CatalogIntegrationAwsGlueShowOutputOutputReference <a name="CatalogIntegrationAwsGlueShowOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.catalog_integration_aws_glue.CatalogIntegrationAwsGlueShowOutputOutputReference;

new CatalogIntegrationAwsGlueShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutput">CatalogIntegrationAwsGlueShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.internalValue"></a>

```java
public CatalogIntegrationAwsGlueShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutput">CatalogIntegrationAwsGlueShowOutput</a>

---


### CatalogIntegrationAwsGlueTimeoutsOutputReference <a name="CatalogIntegrationAwsGlueTimeoutsOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.catalog_integration_aws_glue.CatalogIntegrationAwsGlueTimeoutsOutputReference;

new CatalogIntegrationAwsGlueTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CatalogIntegrationAwsGlueTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a>

---



